
interface Department{
    id: number
    name: string,
    description: string,
    image: string,
    amount: number,
}

export const DepartmentData: Department[] = [
  {
    id: 0,
    name: "Web Design",
    description: "a",
    image: "/png/web-design.png",
    amount: 78,
  },
  {
    id: 1,
    name: "Web Programming",
    description: "a",
    image: "/png/web-programming.png",
    amount: 273,
  },
  {
    id: 2,
    name: "Web Marketing",
    description: "a",
    image: "/png/web-marketing.png",
    amount: 165,
  },
  {
    id: 3,
    name: "Web Content",
    description: "a",
    image: "/png/web-content.png",
    amount: 56,
  },
];