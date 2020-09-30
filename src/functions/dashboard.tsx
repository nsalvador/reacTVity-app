// import { useEffect, useReducer, useState } from 'react';

// import { database } from '../firebase';
// import subscriptionsReducer from '../reducers/subscriptions';

// const useDashboard = (id: string) => {
//   const [subscriptions, dispatch] = useReducer(subscriptionsReducer, []);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     database
//       .ref(`users/${id}/shows`)
//       .once(`value`)
//       .then((dataSnapshot) => {
//         const subscriptions = [];
//         dataSnapshot.forEach((childSnapshot) => {
//           subscriptions.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val(),
//           });
//         });
//         setLoading(false);
//         dispatch({ type: 'POPULATE_SUBSCRIPTIONS', subscriptions });
//       })
//       .catch((e) => setError(e));
//   }, [id]);

//   return { error, loading, subscriptions, dispatch };
// };

// export default useDashboard;
