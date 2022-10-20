import { StatusCodes } from '../constants/status-code';

export enum ErrorsEnum {
  USER_NOT_ACCOUNT_CONTACT = 'User must be account contact',
  MEETING_DONT_EXIST = 'Meeting does not exist',
  MEETING_FINISHED = 'Meeting finished',
  ACTIVE_MEETING_STATISTIC_DONT_EXIST = 'Active meeting call statistic does not exist',
  USER_NOT_IN_MEETING = 'User not in meeting',
  INVALID_PATH_UUID = 'pathParam must be uuid',
  FORBIDDEN = 'Forbidden',
  NOT_FOUND = 'NOT_FOUND',
  INTERNAL_SERVER_ERROR = 'Internal Server Error',
  INVALID_NOTIFICATION_CONTEXT = 'INVALID_NOTIFICATION_CONTEXT',
}

const errorDefinition = {
  [ErrorsEnum.USER_NOT_ACCOUNT_CONTACT]: StatusCodes.BAD_REQUEST,
  [ErrorsEnum.MEETING_DONT_EXIST]: StatusCodes.NOT_FOUND,
  [ErrorsEnum.MEETING_FINISHED]: StatusCodes.BAD_REQUEST,
  [ErrorsEnum.USER_NOT_IN_MEETING]: StatusCodes.BAD_REQUEST,
  [ErrorsEnum.INVALID_PATH_UUID]: StatusCodes.BAD_REQUEST,
  [ErrorsEnum.FORBIDDEN]: StatusCodes.FORBIDDEN,
  [ErrorsEnum.NOT_FOUND]: StatusCodes.NOT_FOUND,
  [ErrorsEnum.ACTIVE_MEETING_STATISTIC_DONT_EXIST]: StatusCodes.NOT_FOUND,
};

export function getErrorDefinition(message: ErrorsEnum): { code: StatusCodes; message: ErrorsEnum } {
  const code: StatusCodes = errorDefinition[message];
  return code
    ? { code, message }
    : { code: StatusCodes.INTERNAL_SERVER_ERROR, message: ErrorsEnum.INTERNAL_SERVER_ERROR };
}