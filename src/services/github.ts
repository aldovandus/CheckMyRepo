import axios, {AxiosResponse} from 'axios';

const checkGithubUsername = async (
  username: string,
): Promise<AxiosResponse<any, any> | undefined> => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response;
};

const checkGithubRepository = async (username: string, repoLink: string) => {
  const response = await axios.get(
    `https://api.github.com/repos/${username}/${repoLink}`,
  );
  return response;
};

export {checkGithubUsername, checkGithubRepository};
