const path = {
  home: '/',
  login: '/login',
  register: '/register',
  forgotPassword: '/forgot-password',
  createQuestion: '/create-question',
  user: '/user',
  myQuestions: '/user/question',
  profile: '/user/profile',
  changePassword: '/user/change-password',
  mySchedual: '/user/schedual-consutants',
  myRating: '/user/ratings',
  consultants: '/consultants',
  consultantEvaluation: '/consultant-evaluation',
  scheduleConsultant: '/schedule-consultant',
  userDashBoard: '/user/dashboard',
  consultantDashboard: '/user/consultant-dashboard',
  questionLibrary: '/question-library',
  messages: '/messages',
  consultantMessages: '/consultant-messages',
  manage: '/manage',
  manageQuestion: '/manage/questions',
  manageSchedule: '/manage/schedules',
  managePost: '/manage/posts',
  manageCommonQuestion: '/manage/common-questions',
  manageDistrict: '/manage/districts',
  manageWard: '/manage/wards',
  manageProvince: '/manage/provinces',
  manageRole: '/manage/roles',
  manageConsultantRole: '/manage/consultant-roles',
  manageAskRole: '/manage/ask-roles',
  manageField: '/manage/fields',
  manageDepartment: '/manage/departments',
  manageUser: '/manage/users',
  questionDetail: '/manage/questions/detail/:id',
  schedualDetail: '/manage/schedules/detail/:id',
  postDetail: '/manage/posts/detail/:id',
  post: '/posts/:id'
} as const

export default path
