export const zodiacSigns = [
  { name: "ราศีมังกร", icon: "♑", dates: "15 ม.ค. - 12 ก.พ." },
  { name: "ราศีกุมภ์", icon: "♒", dates: "13 ก.พ. - 14 มี.ค." },
  { name: "ราศีมีน", icon: "♓", dates: "15 มี.ค. - 12 เม.ย." },
  { name: "ราศีเมษ", icon: "♈", dates: "13 เม.ย. - 14 พ.ค." },
  { name: "ราศีพฤษภ", icon: "♉", dates: "15 พ.ค. - 14 มิ.ย." },
  { name: "ราศีเมถุน", icon: "♊", dates: "15 มิ.ย. - 14 ก.ค." },
  { name: "ราศีกรกฎ", icon: "♋", dates: "15 ก.ค. - 15 ส.ค." },
  { name: "ราศีสิงห์", icon: "♌", dates: "16 ส.ค. - 16 ก.ย." },
  { name: "ราศีกันย์", icon: "♍", dates: "17 ก.ย. - 16 ต.ค." },
  { name: "ราศีตุลย์", icon: "♎", dates: "17 ต.ค. - 15 พ.ย." },
  { name: "ราศีพิจิก", icon: "♏", dates: "16 พ.ย. - 15 ธ.ค." },
  { name: "ราศีธนู", icon: "♐", dates: "16 ธ.ค. - 14 ม.ค." },
];

export const generalPredictions = [
  "วันนี้คุณจะมีโชคลาภทางการเงินอย่างไม่คาดฝัน", // Unexpected financial luck
  "ระวังเรื่องสุขภาพเล็กๆ น้อยๆ แต่งานจะราบรื่น", // Watch health, work smooth
  "คนรักจะนำข่าวดีมาให้ การลงทุนมีความเสี่ยง", // Good news from lover, risky investment
  "สีนำโชควันนี้คือสีแดง เลขนำโชคคือ 9", // Lucky color red, lucky number 9
  "มีเกณฑ์จะได้เดินทางไกลและพบมิตรใหม่", // Travel and new friends
  "ศัตรูจะกลับกลายเป็นมิตร โชคลาภกำลังเข้ามา", // Enemies become friends, luck incoming
];

export const getRandomPrediction = () => {
  const randomIndex = Math.floor(Math.random() * generalPredictions.length);
  return generalPredictions[randomIndex];
};
