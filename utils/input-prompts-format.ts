interface InputPromptsProps {
  jobPosition: string;
  jobDescription: string;
  jobExperience: string;
  company: string;
}

const QUESTION_COUNT = process.env.NEXT_PUBLIC_MAX_QUESTION_COUNT;

interface QuesAns {
  question: string;
  answer: string;
}

let output: QuesAns[] = [];

export const InputPromptsFormat = ({
  jobDescription,
  jobExperience,
  jobPosition,
  company,
}: InputPromptsProps) => {
  return `Given the job position of a ${jobPosition} with primary skills in ${jobDescription}, and ${jobExperience} 
  years of experience, please provide a summary of the most common interview questions asked by 
  ${company} over the past 5 years to assess a candidate's proficiency and experience with these technologies.Make sure you give easy questions only.aske basic question that some one with zero knowledge can answer.
   Based on this summary, generate ${QUESTION_COUNT} representative interview questions. 
  Format the output to return only an array like this ${output} 
  which stores questions and answers for ${QUESTION_COUNT} times but don't give any sort 
  extra alphanumeric letters other than alphabets and object {} 
  symbols and store questions in question and answers in answers key of the object. Make sure you give easy questions only.aske basic question that some one with zero knowledge can answer.`;
};
