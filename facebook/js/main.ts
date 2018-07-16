class UserProfile {
    fullName: string;
    profilePicture: string;
    otherName: string;
    about: string;
    quote: string;
    bloodGroup: string;
    phoneNumber: string;
    email: string;
    dateOfBirth: string;
    gender: string;
    relationshipStatus: string;
    familyMembers: Array<string>;
    currentCity: string;
    currentHometown: string;
    highSchoolName: string;
    collegeName: string;
    workPlace: string;
    numberOfFriends: number;
    friends: Array<string>;

    constructor(fullName: string,profilePicture: string, about: string = '', 
            quote: string = '', bloodGroup: string, phoneNumber: string, 
            email: string, dateOfBirth: string, gender: string, relationshipStatus: string,
            familyMembers: Array<string>, currentCity: string, currentHometown: string,
            highSchoolName: string, collegeName: string, workPlace: string, 
            numberOfFriends: number, friends: Array<string>, otherName: string) {

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
        this.numberOfFriends = numberOfFriends
        this.friends = friends;
    }

    getFullName() : string {
        return this.fullName;
    }

    getProfilePicture() : string {
        return this.profilePicture;
    }

    getOtherName() : string {
        return this.otherName;
    }

    setOtherName(value: string) {
        this.otherName = value;
    }

    getAbout() : string {
        return this.about;
    }

    getPhoneNumber() : string {
        return this.phoneNumber;
    }

    getBloodGroup() : string {
        return this.bloodGroup;
    } 

    getEmail() : string {
        return this.email;
    }

    getDateOfBirth() : string {
        return this.dateOfBirth;
    }

    getRelationshipStatus() : string {
        return this.relationshipStatus;
    }

    setRelationshipStatus(value: string) {
        this.relationshipStatus = value;
    }

    getCurrentCity() : string {
        return this.currentCity;
    }

    getCurrentHometown() : string {
        return this.currentHometown;
    }

    getWorkPlace() : string {
        return this.workPlace;
    }

    getNumberOfFriends() : number {
        return this.numberOfFriends;
    }

    getFriendsList() : Array<string> {
        return this.friends;
    }

}

let firstUser = new UserProfile('Rahul Sharma', 'https://facebook.dropbox/rahul.jpeg', 
                    'I am busy', 'All is well', 'B+', '9856101236', 'rahul.sh42@gmail.com', 
                    '02/05/1996', 'Male', 'Engaged', ['Ajay Sharma'], 'Hyderebad', 'Kondapur', 
                    'Gurukul H.S', 'Ikon Commerce College', 'Tata Consultancy Service', 
                    1012, ['AKshay', 'Sandeep'], 'Raj');
        

console.log(`Name: ${firstUser.getFullName()}`);
console.log(`Email: ${firstUser.getEmail()}`);
console.log(`Mobile Number: ${firstUser.getPhoneNumber()}`);
console.log(`Realtionship status: ${firstUser.getRelationshipStatus()}`);
console.log(`Blood Group: ${firstUser.getBloodGroup()}`);








