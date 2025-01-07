import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

<<<<<<< HEAD
// إنشاء فندق جديد
=======
>>>>>>> e0b9deaf1f86d0fa79c4cf360b9ec2387c33ef63
export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

<<<<<<< HEAD
// تحديث بيانات فندق
=======
>>>>>>> e0b9deaf1f86d0fa79c4cf360b9ec2387c33ef63
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
<<<<<<< HEAD

// حذف فندق
=======
>>>>>>> e0b9deaf1f86d0fa79c4cf360b9ec2387c33ef63
export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted.");
  } catch (err) {
    next(err);
  }
};
<<<<<<< HEAD

// جلب بيانات فندق محدد
=======
>>>>>>> e0b9deaf1f86d0fa79c4cf360b9ec2387c33ef63
export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};
<<<<<<< HEAD

// جلب قائمة بالفنادق مع الشروط المحددة
export const getHotels = async (req, res, next) => {
  const { min = 1, max = 999, ...others } = req.query;
  try {
    const hotels = await Hotel.find({
      ...others,
      cheapestPrice: { $gt: min, $lt: max },
    }).limit(Number(req.query.limit));
=======
export const getHotels = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const hotels = await Hotel.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit);
>>>>>>> e0b9deaf1f86d0fa79c4cf360b9ec2387c33ef63
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};
<<<<<<< HEAD

// حساب عدد الفنادق في كل مدينة
=======
>>>>>>> e0b9deaf1f86d0fa79c4cf360b9ec2387c33ef63
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
<<<<<<< HEAD
      cities.map(city => Hotel.countDocuments({ city }))
=======
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
>>>>>>> e0b9deaf1f86d0fa79c4cf360b9ec2387c33ef63
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
<<<<<<< HEAD

// حساب عدد الفنادق حسب النوع
=======
>>>>>>> e0b9deaf1f86d0fa79c4cf360b9ec2387c33ef63
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

<<<<<<< HEAD
// جلب قائمة بالغرف لفندق معين
=======
>>>>>>> e0b9deaf1f86d0fa79c4cf360b9ec2387c33ef63
export const getHotelRooms = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    const list = await Promise.all(
<<<<<<< HEAD
      hotel.rooms.map(room => Room.findById(room))
    );
    res.status(200).json(list);
=======
      hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list)
>>>>>>> e0b9deaf1f86d0fa79c4cf360b9ec2387c33ef63
  } catch (err) {
    next(err);
  }
};
