import admin from '../firebase/configuration';

const getUsersFromDS = async (count) => {
  const dbUsersRef = admin.database().ref('users/results');
  const snap = await dbUsersRef.orderByChild('name/first').limitToFirst(count).once('value');
  return snap.val();
};

export const getUserByUserName = async (userName) => {
  const dbUsersRef = admin.database().ref('users');
  const snap = await dbUsersRef.orderByChild('name/first').equalTo(userName.toLowerCase()).limitToFirst(1).once('value');
  console.log('val', snap.val());
  return snap.val();
};

export default getUsersFromDS;
