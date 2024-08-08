import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  uploadProgress: number | null = null;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      console.log('Selected file:', file);
    }
    return file;
  }

  uploadfile(fileInput:any) {
    const formData = new FormData();

    if (fileInput && fileInput.nativeElement.files.length > 0) {
      formData.append('file', fileInput.nativeElement.files[0]);

      this.http
        .post('http://localhost:3000/upload', formData, {
          reportProgress: true,
          observe: 'events',
        })
        .subscribe((event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.uploadProgress = Math.round((100 * event.loaded) / event.total);
          } else if (event.type === HttpEventType.Response) {
            this.uploadProgress = null;
            console.log('File uploaded successfully:', event.body);
          }
        });
    }
    console.log('File upload initiated');
  }

}
