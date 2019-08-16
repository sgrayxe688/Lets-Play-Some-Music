export interface User {
    fName: string,
    lName: string,
    un: string,
    pw: string;
    playlist?: Object;
    favorites?: Object;
}