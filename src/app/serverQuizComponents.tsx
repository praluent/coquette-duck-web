import { S3Client, ListObjectsV2Command, GetObjectCommand } from "@aws-sdk/client-s3";
 
const s3Client = new S3Client({
    region: 'eu-west-2', // Replace with your S3 region
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
    });
 
export async function getOptions(){
    
    
      const command = new ListObjectsV2Command({
        Bucket: 'coquette-duck-data'
      });
      // Fetch data from external API
      const listObject = await s3Client.send(command)
      const folders = listObject.Contents?.filter((folder) => folder.Key !== undefined && folder.Key.endsWith('/'))
      return folders;
}
export async function getTopics(folder:string) {

    const command = new ListObjectsV2Command({
        Bucket: 'coquette-duck-data'
    });
    const listObject = await s3Client.send(command)
    const files = listObject.Contents?.filter((file) => file.Size !== 0 && file.Key?.startsWith(folder)).map((file) => file.Key);
    return files;
}
export async function getQuestions(files: string[]) {
    const preppedQuestions: string[][] = [];

    for (const file of files) { // Use 'file' to access the value, not the index
        const command = new GetObjectCommand({
            Bucket: 'coquette-duck-data',
            Key: file
        });
        const fileContent = await s3Client.send(command);

        const bodyContent = await fileContent.Body?.transformToString(); // Use await to wait for transformation
        if (bodyContent) {
            const trimBeginning = "```json";
            const trimEnd = "```";
            const trimmedContent = bodyContent.replace(new RegExp(`^${trimBeginning}|${trimEnd}$`, "gm"), "");
            const questionList = JSON.parse(trimmedContent).questions;

            for (const question of Object.values(questionList)) { // Use Object.entries for key-value pairs
                let combinedQuestion: any[] = []; // Initialize combinedQuestion array outside the loop
                combinedQuestion.push(question.prompt);
                if (Array.isArray(question.options)) {
                    combinedQuestion.push(question.options);
                } else if (typeof question.options === "object" && question.options !== null) {
                    combinedQuestion.push(Object.values(question.options));
                } else {
                    // Handle other cases if needed
                }
                combinedQuestion.push(question.answer);
                preppedQuestions.push(combinedQuestion);
            }
        }
    }
    
    return preppedQuestions;
}