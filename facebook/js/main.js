var UserProfile = /** @class */ (function () {
    function UserProfile(fullName, profilePicture, about, quote, bloodGroup, phoneNumber, email, dateOfBirth, gender, relationshipStatus, familyMembers, currentCity, currentHometown, highSchoolName, collegeName, workPlace, numberOfFriends, friends, otherName) {
        if (about === void 0) { about = ''; }
        if (quote === void 0) { quote = ''; }
        this.fullName = fullName;
        this.profilePicture = profilePicture;
        this.otherName = otherName;
        this.about = about;
        this.quote = quote;
        this.bloodGroup = bloodGroup;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.relationshipStatus = relationshipStatus;
        this.familyMembers = familyMembers;
        this.currentCity = currentCity;
        this.currentHometown = currentHometown;
        this.highSchoolName = highSchoolName;
        this.collegeName = collegeName;
        this.workPlace = workPlace;
        this.numberOfFriends = numberOfFriends;
        this.friends = friends;
    }
    UserProfile.prototype.getFullName = function () {
        return this.fullName;
    };
    UserProfile.prototype.getProfilePicture = function () {
        return this.profilePicture;
    };
    UserProfile.prototype.getOtherName = function () {
        return this.otherName;
    };
    UserProfile.prototype.setOtherName = function (value) {
        this.otherName = value;
    };
    UserProfile.prototype.getAbout = function () {
        return this.about;
    };
    UserProfile.prototype.getPhoneNumber = function () {
        return this.phoneNumber;
    };
    UserProfile.prototype.getBloodGroup = function () {
        return this.bloodGroup;
    };
    UserProfile.prototype.getEmail = function () {
        return this.email;
    };
    UserProfile.prototype.getDateOfBirth = function () {
        return this.dateOfBirth;
    };
    UserProfile.prototype.getRelationshipStatus = function () {
        return this.relationshipStatus;
    };
    UserProfile.prototype.setRelationshipStatus = function (value) {
        this.relationshipStatus = value;
    };
    UserProfile.prototype.getCurrentCity = function () {
        return this.currentCity;
    };
    UserProfile.prototype.getCurrentHometown = function () {
        return this.currentHometown;
    };
    UserProfile.prototype.getWorkPlace = function () {
        return this.workPlace;
    };
    UserProfile.prototype.getNumberOfFriends = function () {
        return this.numberOfFriends;
    };
    UserProfile.prototype.getFriendsList = function () {
        return this.friends;
    };
    return UserProfile;
}());
var firstUser = new UserProfile('Rahul Sharma', 'https://facebook.dropbox/rahul.jpeg', 'I am busy', 'All is well', 'B+', '9856101236', 'rahul.sh42@gmail.com', '02/05/1996', 'Male', 'Engaged', ['Ajay Sharma'], 'Hyderebad', 'Kondapur', 'Gurukul H.S', 'Ikon Commerce College', 'Tata Consultancy Service', 1012, ['AKshay', 'Sandeep'], 'Raj');
console.log("Name: " + firstUser.getFullName());
console.log("Email: " + firstUser.getEmail());
console.log("Mobile Number: " + firstUser.getPhoneNumber());
console.log("Realtionship status: " + firstUser.getRelationshipStatus());
console.log("Blood Group: " + firstUser.getBloodGroup());
