import axios from "axios";
import FormData from "form-data";
import { wait } from "../utils/time.js";

const client = axios.create();

// O Discord tem um rae limit de 5 requests a cada 5 segundos
// Então devemos  fazer chuncks do arquivo
let uploadingCount = 0;

export const uploadToDiscord = async (token, channelId, file, fileName) => {
  await wait(uploadingCount++ * 1000);

  const formData = new FormData();

  formData.append("files[0]", file, { filename: fileName });

  const result = (
    await client
      .post(
        `https://discord.com/api/channels/${channelId}/messages`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bot ${token}`,
          },
        }
      )
      .catch(async (err) => {
        // Nova tentativa automática se a solicitação tiver rate limit recursivamente
        await wait(+err.response.headers["x-ratelimit-reset-after"]);

        return {
          data: {
            attachments: [
              {
                url: await uploadToDiscord(token, channelId, file, fileName),
              },
            ],
          },
        };
      })
      .finally(() => uploadingCount--)
  ).data;

  if (!result?.attachments?.[0]?.url) {
    throw new Error("Não foi possível encontrar os anexos durante o upload");
  }

  return result.attachments[0].url;
};
