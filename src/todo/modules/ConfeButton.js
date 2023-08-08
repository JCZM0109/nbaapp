import { Box, Image, Link, Heading, Flex } from "@chakra-ui/react"
import { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from "@chakra-ui/react"
import eastlogo from "../../images/east/EAST.svg"
import westlogo from "../../images/west/WEST.svg"
import { useState } from "react"


export const ConfeButton = ({ indi }) => {


    const [isOpen, setIsOpen] = useState(false);
    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);

    const drawerhcolor = (indi) ? "rgba(9, 82, 156, 1)" : "rgba(237, 23, 75, 1)" ;

    return (
        <>
            <Box as="button" w="400px" onClick={onOpen}>
                <Image src={indi ? eastlogo : westlogo} />
            </Box>
            <Drawer isOpen={isOpen} onClose={onClose} placement={indi ? "left" : "right"} size="lg">
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerBody>
                            <Flex justifyContent="center" mt="30px">
                                <Heading fontSize="3xl" color={drawerhcolor}>
                                    {indi ? "Eastern Conference" : "Western Conference"}
                                </Heading>
                            </Flex>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    );
}