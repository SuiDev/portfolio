import React, { lazy } from "react";
import { Link as Scroll } from "react-scroll";

/** Material UI Modules */
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { MediaContext } from "components/pages/Home";
const Contact = lazy(() => import("components/organisms/Contact"));

const Header = () => {
  // お問い合わせモーダルの状態管理
  const [hasOpenContact, setHasOpenContact] = React.useState(false);
  const handleContactOpen = () => setHasOpenContact(true);
  // モーダルの外側をクリックしても閉じないように抑制します。
  const handleContactClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setHasOpenContact(false);
    }
  }

  return (
    <>
      <MediaContext.Consumer>
        {media =>
          <Box
            sx={{
              flexGrow: 1
            }}
          >
            <AppBar
              sx={{
                background: "white"
              }}
              position="fixed"
              elevation={0}
            >
              <Toolbar>
                {/** ページタイトル */}
                {media.isMobileScreen ?
                  // スマートフォンの表示
                  <>
                    <Typography
                      sx={{
                        flexGrow: 1,
                        ml: 1
                      }}
                      variant="body1"
                      color="black"
                    >
                      <Scroll
                        to="top"
                        smooth={true}
                        duration={600}
                        offset={-64}
                      >
                        SuiSui’s Portfolio
                      </Scroll>
                    </Typography>
                  </>
                  :
                  // スマートフォン以外の表示
                  <>
                    <Typography
                      sx={{
                        flexGrow: 1,
                        ml: 15
                      }}
                      variant="h5"
                      color="black"
                    >
                      <Scroll
                        to="top"
                        smooth={true}
                        duration={600}
                        offset={-64}
                      >
                        SuiSui’s Portfolio
                      </Scroll>
                    </Typography>
                  </> 
                }
                {/** headerResponsiveEdgeのときのみ表示 */}
                {!media.headerResponsiveEdge && 
                  <>
                    {/** プロフィールボタン */}
                    <Button
                      sx={{
                        background: "white",
                        color: "gray",
                        mr: 1,
                        "&:hover": {
                          backgroundColor: "white",
                          color: "black"
                        }
                      }}
                    >
                      <Scroll
                        to="about"
                        smooth={true}
                        duration={600}
                        offset={-64}
                      >
                        プロフィール
                      </Scroll>
                    </Button>
                    {/** スキルボタン */} 
                    <Button
                      sx={{
                        background: "white",
                        color: "gray",
                        mr: 1,
                        ml: 1,
                        "&:hover": {
                          backgroundColor: "white",
                          color: "black"
                        }
                      }}
                    >
                      <Scroll
                        to="skill"
                        smooth={true}
                        duration={600}
                        offset={-64}
                      >
                        スキル
                      </Scroll>
                    </Button>
                    {/** 製作物ボタン */}
                    <Button
                      sx={{
                        background: "white",
                        color: "gray",
                        mr: 1,
                        ml: 1,
                        "&:hover": {
                          backgroundColor: "white",
                          color: "black"
                        }
                      }}
                    >
                      <Scroll
                        to="work"
                        smooth={true}
                        duration={600}
                        offset={-64}
                      >
                        製作物
                      </Scroll>
                    </Button>
                  </>
                }
                {/** お問い合わせボタン */}
                {!media.isMobileScreen ?
                  // スマートフォン以外の表示
                  <>
                    <Button
                      sx={{
                        background: "white",
                        color: "gray",
                        mr: 15,
                        ml: 1,
                        "&:hover": {
                          backgroundColor: "white",
                          color: "black"
                        }
                      }}
                      onClick={handleContactOpen}
                    >
                      お問い合わせ
                    </Button>
                  </>
                  :
                  // スマートフォンの表示
                  <>
                    <Button
                      sx={{
                        background: "white",
                        color: "gray",
                        mr: 1,
                        ml: 1,
                        "&:hover": {
                          backgroundColor: "white",
                          color: "black"
                        }
                      }}
                      onClick={handleContactOpen}
                    >
                      お問い合わせ
                    </Button>
                  </>
                }
                {/** お問い合わせモーダル */}
                <Modal
                  open={hasOpenContact}
                  onClose={handleContactClose}
                  aria-labelledby="modal-contact"
                  aria-describedby="modal-contact"
                  disableEnforceFocus
                >
                  <Contact
                    setHasOpenContact={setHasOpenContact}
                  />
                </Modal>
              </Toolbar>
            </AppBar>
            <Toolbar />
          </Box>
        }
      </MediaContext.Consumer>
    </>
  );
}

export default Header;
