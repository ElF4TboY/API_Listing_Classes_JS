export interface ClassroomsApi {
  id: string;
  classId: string;
  name: string;
}

export interface NoteBoardApi {
  // id: string;
  studentId: string;
  frenchMarks: number[];
  mathMarks: number[];
  scienceMarks: number[];
}
export interface StudentsApi {
  // id: string;
  classId: string;
  studentId: string;
  firstname: string;
  surname: string;
}
