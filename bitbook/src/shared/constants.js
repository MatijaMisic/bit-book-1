class Constants {
    BASE_END_POINT = "http://bitbookapi.azurewebsites.net/api/";
    typeImage = "image";
    typeText = "text";
    typeVideo = "video";

    profileUrl = 'profile';
    postsUrl = 'Posts';
    usersUrl = "users";

    registerUrl = this.BASE_END_POINT + 'register'
    loginUrl = this.BASE_END_POINT + 'login';
    textPostUrl = this.BASE_END_POINT + 'TextPosts';
    imagePostUrl = this.BASE_END_POINT + 'ImagePosts';
    videoPostUrl = this.BASE_END_POINT + 'VideoPosts';
    commentsPostUrl = this.BASE_END_POINT + 'Comments';
    deletePostRequestUrl = this.BASE_END_POINT + 'Posts/';
    putRequestUrl = this.BASE_END_POINT + 'Profiles';


    loginOptions = {
        headers: {
            "Content-Type": "application/json",
            "Key": "7E47472",
        }
    }
}

export const myConst = new Constants();