var YoutubeVideo = /** @class */ (function () {
    function YoutubeVideo(_videoTitle, _numberOfViews, _upvotes, _downvotes, _duration, _channelName, _isSubscribed, _subscribers, _publishedDate, _description, _category, _license, _comments) {
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
    YoutubeVideo.prototype.getVideoTitle = function () {
        return this.videoTitle;
    };
    YoutubeVideo.prototype.getDuration = function () {
        return this.duration;
    };
    YoutubeVideo.prototype.getChannelName = function () {
        return this.channelName;
    };
    YoutubeVideo.prototype.getPublishedDate = function () {
        return this.publishedDate;
    };
    YoutubeVideo.prototype.getCategory = function () {
        return this.category;
    };
    YoutubeVideo.prototype.getLicesnse = function () {
        return this.license;
    };
    YoutubeVideo.prototype.getNumberOfViews = function () {
        return this.numberOfViews;
    };
    YoutubeVideo.prototype.setNumberOfViews = function (value) {
        this.numberOfViews = value;
    };
    YoutubeVideo.prototype.getNumberOfUpvotes = function () {
        return this.numberOfViews;
    };
    YoutubeVideo.prototype.setNumberOfUpvotes = function (value) {
        this.upvotes = value;
    };
    YoutubeVideo.prototype.getNumberOfDownvotes = function () {
        return this.downvotes;
    };
    YoutubeVideo.prototype.setNumberOfDownvotes = function (value) {
        this.downvotes = value;
    };
    YoutubeVideo.prototype.subscribeUser = function () {
        this.isSubscribed = true;
    };
    YoutubeVideo.prototype.getNumberOfSubscriber = function () {
        return this.subscribers;
    };
    YoutubeVideo.prototype.unSubscribeUser = function () {
        this.isSubscribed = false;
    };
    YoutubeVideo.prototype.getVideoDescription = function () {
        return this.description;
    };
    YoutubeVideo.prototype.getCommentsList = function () {
        return this.comments;
    };
    YoutubeVideo.prototype.postComment = function (comment) {
        this.comments.push(comment);
    };
    return YoutubeVideo;
}());
var firstVideo = new YoutubeVideo('Stand Up Comedy by Rajat', 369051, 11321, 460, 7.32, 'Rajat Chauhan', false, 3325, 'Jun 10, 2018', 'Here is a funny take on Ola Share ride.', 'Peple & Blogs', 'Standard Youtube License', ['Superb', 'Audion not so clear']);
console.log("Title: " + firstVideo.getVideoTitle());
console.log("Channel Name: " + firstVideo.getChannelName());
console.log("Description: " + firstVideo.description);
console.log("Published on " + firstVideo.getPublishedDate());
firstVideo.postComment('Nice Content');
firstVideo.subscribeUser();
console.log(firstVideo);
