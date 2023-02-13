import fs from "fs";

export const getAllSlug = (dirPath: string) => {
  return fs.readdirSync(dirPath).map((fileName) => {
    return fileName.replace(/\.md$/, "");
  });
};
