import { useToast } from "@chakra-ui/react";

const WarningToast = () => {
  const toast = useToast();

  const showToast = ({ title, message, duration = 2000 }) => {
    toast({
      title: title,
      description: message,
      position:"top",
      duration: duration,
      isClosable: true,
      status:"warning"
    });
  };

  return { showToast };
};

export default WarningToast;
