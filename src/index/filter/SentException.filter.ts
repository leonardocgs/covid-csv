import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { SentException } from '../error/SentError.exception';
@Catch(SentException)
export class SentExceptionFilter implements ExceptionFilter {
  catch(exception: SentException, host: ArgumentsHost) {
    console.log(exception.message);
  }
}
