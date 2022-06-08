export const department = [
    { id : "101", name : "Development"},
    { id : "102", name : "QA"},
    { id : "103", name : "UI/UX"},
]

export function getDepartment(){
    return department.filter(dept => dept);
}