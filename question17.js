let dinnerInviteList = ['Arsalan', 'Maaz', 'Ahsan']

console.log(dinnerInviteList[0] + ', You are invited to attend dinner at my place tonight.')
console.log(dinnerInviteList[1] + ', You are invited to attend dinner at my place tonight.')
console.log(dinnerInviteList[2] + ', You are invited to attend dinner at my place tonight.')
console.log('\n')

console.log(dinnerInviteList[2] + " won't be able to make it to the dinner tonight.")

dinnerInviteList.pop();
dinnerInviteList.push('Zargham')
console.log('\n')
console.log(dinnerInviteList[0] + ', You are invited to attend dinner at my place tonight.')
console.log(dinnerInviteList[1] + ', You are invited to attend dinner at my place tonight.')
console.log(dinnerInviteList[2] + ', You are invited to attend dinner at my place tonight.')

console.log('\n')

console.log('I have found a bigger dinner table and will be inviting more guests to join me for dinner.')

dinnerInviteList.unshift('Rafay')

dinnerInviteList.splice(2, 0, 'Ehsan')

console.log(dinnerInviteList[0] + ', You are invited to attend dinner at my place tonight.')
console.log(dinnerInviteList[1] + ', You are invited to attend dinner at my place tonight.')
console.log(dinnerInviteList[2] + ', You are invited to attend dinner at my place tonight.')
console.log(dinnerInviteList[3] + ', You are invited to attend dinner at my place tonight.')

console.log('\n');
dinnerInviteList.push('Tasneem')


console.log(dinnerInviteList[0] + ', You are invited to attend dinner at my place tonight.')
console.log(dinnerInviteList[1] + ', You are invited to attend dinner at my place tonight.')
console.log(dinnerInviteList[2] + ', You are invited to attend dinner at my place tonight.')
console.log(dinnerInviteList[3] + ', You are invited to attend dinner at my place tonight.')
console.log(dinnerInviteList[4] + ', You are invited to attend dinner at my place tonight.')
console.log(dinnerInviteList[5] + ', You are invited to attend dinner at my place tonight.')

//----

console.log('Unfortunately only two people out of the entire list can come and others will be removed.');

console.log(dinnerInviteList[5], 'sorry but we need to remove and cancel your invitation to the dinner.');
dinnerInviteList.pop();

console.log(dinnerInviteList[4], 'sorry but we need to remove and cancel your invitation to the dinner.');
dinnerInviteList.pop();

console.log(dinnerInviteList[3], 'sorry but we need to remove and cancel your invitation to the dinner.');
dinnerInviteList.pop();

console.log(dinnerInviteList[2], 'sorry but we need to remove and cancel your invitation to the dinner.');
dinnerInviteList.pop();


console.log(dinnerInviteList[0], 'you are still invited to the dinner..');
console.log(dinnerInviteList[1], 'you are still invited to the dinner.');

dinnerInviteList.pop();
dinnerInviteList.pop();

for (let index = 0; index < 6; index++) {
    console.log(dinnerInviteList[index]);

}