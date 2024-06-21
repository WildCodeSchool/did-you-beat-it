export class FileData {

    constructor (public uploadedFile:File|null, public status:string) {
        this.uploadedFile = uploadedFile;
        this.status = status;
    }    
}
