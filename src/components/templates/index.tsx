import {
  Drawer as DrawerWrapper,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  BoxProps,
  Box,
  IconButton
} from "@chakra-ui/react";
import { useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Header = (props: BoxProps) => <Box px={4} py={3} as={"nav"} {...props} />;
const Wrapper = (props: BoxProps) => <Box {...props} />;
const Content = (props: BoxProps) => <Box px={4} py={2} {...props} />;

export const Template: React.FC = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Wrapper>
      <Header bgColor={"grey"}>
        <IconButton
          aria-label={"open-drawer"}
          icon={<HamburgerIcon />}
          onClick={() => setOpen(true)}
        >
          open
        </IconButton>
      </Header>
      <DrawerWrapper isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody></DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </DrawerWrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
};
