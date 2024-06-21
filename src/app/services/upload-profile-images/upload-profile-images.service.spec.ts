import { TestBed } from '@angular/core/testing';

import { UploadProfileImagesService } from './upload-profile-images.service'; 

describe('UploadProfileImagesService', () => {
  let service: UploadProfileImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadProfileImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
