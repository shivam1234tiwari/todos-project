import mongoose from 'mongoose';
const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Mongodb Connected');
  } catch (error) {
    console.error('Failed to connect', error);
    process.exit(1);
  }
};
export default ConnectDB;
