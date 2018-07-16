class YoutubeVideo {
    videoTitle: string;
    numberOfViews: number;
    upvotes: number;
    downvotes: number;
    duration: number;
    channelName: string;
    isSubscribed: boolean;
    subscribers: number;
    publishedDate: string;
    description: string;
    category: string;
    license: string;
    comments: Array<string>;

    constructor(_videoTitle: string, _numberOfViews: number, _upvotes: number, 
            _downvotes: number, _duration: number, _channelName: string, _isSubscribed: boolean,
            _subscribers: number, _publishedDate: string, _description: string, _category: string, 
            _license: string, _comments: Array<string>) {
        
        this.videoTitle = _videoTitle;
        this.numberOfViews = _numberOfViews;
        this.upvotes = _upvotes;
        this.downvotes = _downvotes;
        this.duration = _duration;
        this.channelName = _channelName;
        this.isSubscribed = _isSubscribed;
        this.subscribers = _subscribers;
        this.publishedDate = _publishedDate;
        this.description = _description;
        this.category = _category;
        this.license = _license;
        this.comments = _comments;
    }
        
    getVideoTitle() : string {
        return this.videoTitle;
    }

    getDuration() : number {
        return this.duration;
    }
     
    getChannelName() : string {
        return this.channelName;
    }

    getPublishedDate() : string {
        return this.publishedDate;
    }
     
    getCategory() {
        return this.category;
    }

    getLicesnse() {
        return this.license;
    }

    getNumberOfViews() : number {
        return this.numberOfViews;
    }

    setNumberOfViews(value : number) {
        this.numberOfViews = value
    }
    
    getNumberOfUpvotes() : number {
        return this.numberOfViews;
    }

    setNumberOfUpvotes(value : number) {
        this.upvotes = value;
    }

    getNumberOfDownvotes() : number {
        return this.downvotes;
    }
    
    setNumberOfDownvotes(value : number) {
        this.downvotes = value;
    }
    
    subscribeUser() {
        this.isSubscribed = true;
    }

    getNumberOfSubscriber() : number {
        return this.subscribers;
    }

    unSubscribeUser() {
        this.isSubscribed = false;
    }

    getVideoDescription() : string {
        return this.description;
    }
        
    getCommentsList() : Array<string> {
        return this.comments;
    }

    postComment(comment : string) {
        this.comments.push(comment);
    }   
}

let firstVideo = new YoutubeVideo('Stand Up Comedy by Rajat', 369051, 11321,
                    460, 7.32, 'Rajat Chauhan', false, 3325, 'Jun 10, 2018', 
                    'Here is a funny take on Ola Share ride.', 'Peple & Blogs',
                    'Standard Youtube License', ['Superb', 'Audion not so clear']);

                    

                    
console.log(`Title: ${firstVideo.getVideoTitle()}`);
console.log(`Channel Name: ${firstVideo.getChannelName()}`);
console.log(`Description: ${firstVideo.description}`);
console.log(`Published on ${firstVideo.getPublishedDate()}`)

firstVideo.postComment('Nice Content')
firstVideo.subscribeUser();
console.log(firstVideo);