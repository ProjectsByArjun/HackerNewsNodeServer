import admin from '../firebase/configuration';

const getUsersFromDS = async (count) => {
  const dbUsersRef = admin.database().ref('users/results');
  const snap = await dbUsersRef.orderByChild('name/first').limitToFirst(count).once('value');
  return snap.val();
};

export default getUsersFromDS;
