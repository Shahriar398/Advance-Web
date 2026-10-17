import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { EnrollmentService } from '../enrollment/enrollment.service.js';

@Injectable()
export class NotificationService {
  constructor(
    @Inject(forwardRef(() => EnrollmentService))
    private enrollmentService: any,
  ) {}

  sendNotification(studentName: string, message: string) {
    return {
      message: 'Notification sent successfully',
      student: studentName,
      notification: message,
    };
  }

  checkEnrollmentAndNotify(studentName: string, courseId: string) {
    const enrollment = this.enrollmentService.getEnrollments();

    return {
      message: 'Enrollment checked successfully',
      student: studentName,
      courseId,
      enrollment,
    };
  }
}
