// const invitationCodes = [
//   "1234",
//   "5678",
//   "91011",
//   "121314",
//   "151617",
//   "181920",
//   "212223",
//   "242526",
// ];

// const invitationCode = "1234a";

// if (!invitationCodes.includes(invitationCode)) {
//   console.log("Invalid invitation code");
// }

// just need 16 characters

for (let i = 0; i < 50; i++) {
  const shortId = crypto.randomUUID().split("-").join("").substring(0, 16);
  console.log(`INSERT INTO invitationCodes (code) VALUES('${shortId}');`);
}
