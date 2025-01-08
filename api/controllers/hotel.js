import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

// Create a new hotel
export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

// Update hotel details
export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    next(err);
  }
};

// Delete a hotel
export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted.");
  } catch (err) {
    next(err);
  }
};

// Get data of a specific hotel
export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};

// Get a list of hotels with specific filters
export const getHotels = async (req, res, next) => {
  const { min = 1, max = 999, ...others } = req.query;
  try {
    const hotels = await Hotel.find({
      ...others,
      cheapestPrice: { $gt: min, $lt: max },
    }).limit(Number(req.query.limit) || 10); // Default limit to 10 if not specified
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};

// Get the count of hotels by city
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map(city => Hotel.countDocuments({ city }))
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

// Get the count of hotels by type
export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "hotel" });
    const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
    const resortCount = await Hotel.countDocuments({ type: "resort" });
    const villaCount = await Hotel.countDocuments({ type: "villa" });
    const cabinCount = await Hotel.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartments", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabins", count: cabinCount },
    ]);
  } catch (err) {
    next(err);
  }
};

// Get the rooms of a specific hotel
export const getHotelRooms = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) {
      return res.status(404).json("Hotel not found");
    }

    // Fetch rooms using the room IDs stored in the hotel document
    const roomsList = await Promise.all(
      hotel.rooms.map(roomId => Room.findById(roomId))
    );

    res.status(200).json(roomsList);
  } catch (err) {
    next(err);
  }
};
