import React, { forwardRef, useState } from "react";
import axios from "axios";

/** Material UI Modules */
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CancelIcon from "@mui/icons-material/Cancel";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { MediaContext } from "components/pages/Home";

const Contact = forwardRef((props, ref) => {
  // 会社名の入力値の保持
  const [company, setCompany] = useState("");
  const handleSetCompany = (e) => {
    setCompany(e.target.value);
  }

  // 氏名の入力値の保持
  const [name, setName] = useState("");
  const handleSetName = (e) => {
    setName(e.target.value);
  }

  // メールアドレスの入力値の保持
  const [mail, setMail] = useState("");
  const handleSetMail = (e) => {
    setMail(e.target.value);
  }

  // 問い合わせ内容の入力値の保持
  const [content, setContent] = useState("");
  const handleSetContent = (e) => {
    setContent(e.target.value);
  }

  // 問い合わせAPIのヘッダーとレスポンスタイプを設定します。
  const ContactRequestBase = axios.create({
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    responseType: "json"  
  });
  
  // 問い合わせを送信します。
  const handleSendMessage = () => {
    // 必須項目が入力されていることをチェックします。
    if (company && name && mail && content) {
      const data = {
        username : "Portfolio",
        text : "会社名: " + company + "\n 氏名: " + name + "\n メール: " + mail + "\n 内容: " + content
      };

      ContactRequestBase
        .post(process.env.REACT_APP_SLACK_URL, data)
        .then(() => {
          alert("お問い合わせありがとうございます。\n送信が完了しました。")
          props.setHasOpenContact(false)
        })
        .catch(() =>  {
          alert("送信に失敗しました。お手数ですが、TwitterのDMからお願いいたします。")
        });
    } else {
      alert("未入力の必須項目があります。")
    }
  }

  const Contents = () => (
    <>
      <Stack
      spacing={4}
      mt={1}
      >
        <Typography
          variant="h6"
          component="h2"
        >
          お問い合わせフォーム
        </Typography>
        <Typography
          sx={{
            mt: 2
          }}
        >
          連絡をご希望の方は、必須項目を入力のうえ
          <br />
          送信をお願いいたします。
        </Typography>
        <TextField
          id="company"
          label="会社名"
          variant="standard"
          required
          value={company}
          onChange={handleSetCompany}
        />
        <TextField
          id="name"
          label="お名前"
          variant="standard"
          required
          value={name}
          onChange={handleSetName}
        />
        <TextField
          id="mail"
          label="メールアドレス"
          variant="standard"
          required
          value={mail}
          onChange={handleSetMail}
        />
        <TextField
          id="discription"
          label="お問い合わせ内容"
          variant="standard"
          required
          value={content}
          onChange={handleSetContent}
          multiline
          rows={8}
        />
      </Stack>
      <Stack
        direction="row"
        spacing={3}
      >
        {/** キャンセルボタン */}
        <Button
          ref={ref}
          sx={{ 
            width: "50%"
          }}
          variant="outlined"
          color="secondary"
          startIcon={<CancelIcon />}
          onClick={() => {
            props.setHasOpenContact(false)
          }}
        >
          キャンセル
        </Button>
        {/** 送信ボタン */}
        <Button
          sx={{
            width: "50%"
          }}
          variant="contained"
          endIcon={<SendIcon />}
          onClick={() => {
            handleSendMessage()
          }}
        >
          送信
        </Button>
      </Stack>
    </>
  );

  return (
    <>
      <MediaContext.Consumer>
        {media =>
          <>
            {!media.isMobileScreen ?
              // スマホ以外のとき
              <>
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    bgcolor: "background.paper",
                    boxShadow: 500,
                    p: 5,
                    textAlign: "center",
                    "& .MuiTextField-root": {
                      m: 1,
                      width: "400px",
                    }
                  }}
                >
                  <Contents />
                </Box>
              </>
              :
              // スマホのとき
              <>
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "80%",
                    bgcolor: "background.paper",
                    boxShadow: 500,
                    p: 5,
                    textAlign: "center",
                    "& .MuiTextField-root": {
                      m: 1,
                      width: "100%",
                    }
                  }}
                >
                  <Contents />
                </Box>
              </>
            }
          </>
        }
      </MediaContext.Consumer>
    </>
  )
});

export default Contact;
