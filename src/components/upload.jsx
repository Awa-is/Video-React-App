import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineUpload } from 'react-icons/ai'

const upload = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <VStack color={'purple.500'} h={'full'} justifyContent={'center'}>
            <AiOutlineUpload size={'10vmax'} />

            <form>
                <HStack >
                    <Input required type='file'  css={{
                        "&::file-selector-button" :{
                            border: 'none',
                            backgroundColor : 'white',
                            width : "calc (100% + 36px )",
                            color: "purple",
                            height: "100%",
                            marginLeft:"-18px",
                            cursor: "pointer"
                        },
                    }}/>
                    <Button color={'purple.500'} type='submit'> Upload</Button>
                </HStack>
            </form>
        </VStack>
    </Container>
  )
}

export default upload