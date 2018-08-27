import { TestBed, inject } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService]
    });
  });

  it('should be created', inject([MessageService], (service: MessageService) => {
    expect(service).toBeTruthy();
  }));

  it('should be add a message and clear the array', inject([MessageService], (service: MessageService) => {
    expect(service.messages).toBeNull;
    service.add('test');
    expect(service.messages[0]).toEqual("test");
    service.clear;
    expect(service.messages).toBeNull;
  }));
  
});
