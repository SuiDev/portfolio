import React from "react";
import axios from "axios";

/** Material UI Modules */
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CancelIcon from "@mui/icons-material/Cancel";
import Modal from "@mui/material/Modal";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";


import { MediaContext } from "components/pages/Home";

const Contact = props => {
  // 問い合わせAPIのヘッダーを設定します。
  const headers = {
    "x-api-key": process.env.REACT_APP_API_KEY,
    "Content-Type": "application/json"
  }
  
  // 問い合わせを送信します。
  const handleSendMessage = () => {
    // 各項目の入力値を取得します。
    // MEMO: モーダルでuseStateで入力値を保持すると、フォーカスが外れてしまうため。
    const company = document.getElementById("company").value;
    const name = document.getElementById("name").value;
    const mail = document.getElementById("mail").value;
    const content = document.getElementById("content").value;

    // 必須項目が入力されていることをチェックします。
    if (company && name && mail && content) {
      // 荒らし対策のため上限文字数を設定します。
      if (company.length < 100 && name.length < 100 && mail.length < 100 && content.length < 2000) {
        const data = {
          username: "Portfolio",
          text: "会社名: " + company + "\n 氏名: " + name + "\n メール: " + mail + "\n 内容: " + content
        };

        axios
          .post(process.env.REACT_APP_SLACK_URL, data, {headers: headers})
          .then(() => {
            alert("お問い合わせありがとうございます。\n送信が完了しました。")
            props.setHasOpenContact(false)
          })
          .catch(() =>  {
            alert("このページからのリクエスト上限に達しています。\nお手数ですが、TwitterのDMからお願いいたします。")
            props.setHasOpenContact(false)
          });
      } else {
        alert("入力文字数の上限を超えています。\n会社名: 100文字\n氏名: 100文字\nメール: 100文字\n内容: 2000文字")
      }
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
        />
        <TextField
          id="name"
          label="お名前"
          variant="standard"
          required
        />
        <TextField
          id="mail"
          label="メールアドレス"
          variant="standard"
          required
        />
        <TextField
          id="content"
          label="お問い合わせ内容"
          variant="standard"
          required
          multiline
          rows={8}
        />
      </Stack>
      <Stack
        direction="row"
        spacing={3}
      >
        <Button
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
      <Modal
        open={props.hasOpenContact}
        onClose={props.onDialogClose}
        aria-labelledby="modal-contact"
        aria-describedby="modal-contact"
        disableAutoFocus
        disableEnforceFocus
      >
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
      </Modal>
    </>
  );
}

export default Contact;
