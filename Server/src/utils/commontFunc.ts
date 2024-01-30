// /**
//  * Dinh dang chuoi thoi gian
//  * @param date : Chuoi can dinh dang
//  * @returns : Tra ve chuoi thon gianda dinh dang
//  * Author : giang(20/07/1999)
//  *
//  */
// export const formatYMD = (date: any) => {
//   //Lay ra  dinh dang thoi gian cua chuoi dua vao thoi gian hien tai
//   const today = new Date(date);

//   let day = String(today.getDate());
//   if (Number(day) > 0 && Number(day) < 10) {
//     day = `0${day}`;
//   }

//   //Lay ra thang tu thang
//   let month = String(today.getMonth() + 1);
//   if (Number(month) > 0 && Number(month) < 10) {
//     month = `0${month}`;
//   }

//   //Lay ra nam tu chuoi
//   let year = today.getFullYear();

//   //Tra ve chuoi dinh dang
//   return `${year} - ${month} - ${day}`;
// };

// export const validateEmail = (email: string) => {
//   return String(email)
//     .toLowerCase()
//     .match(
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
// };
