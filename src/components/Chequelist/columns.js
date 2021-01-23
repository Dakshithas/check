import {format} from 'date-fns';
// import { IconButton,SearchIcon } from "@chakra-ui/react"
import {
    useDisclosure,
    Button,
    Lorem,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from "@chakra-ui/react"

function MyCell({ value, columnProps: { rest: { someFunc } } }) {
    return <a href="#" onClick={someFunc}>{value}</a>
  } 

  function BasicUsage() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Lorem count={2} />
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        
      </>
    )
  }

export const COLUMNS =[
    {
        Header:'Id',
        Footer:'Id',
        accessor:'id'
    },
    {
        Header:'Name',
        Footer:'Name',
        accessor:'name'
    },
    {
        Footer:'issued_date',
        Header:'Issued Date',
        accessor:'issued_date',
        cell:({value})=>{return format(new Date(value),'D-MMM/YYYY')}
    },
    {
        Header:'Amount',
        Footer:'Amount',
        accessor:'amount',
        cell : <button>jj</button>,
        getProps: () => ({ someFunc: () => alert("clicked")})
    },
    {
        Header:'Status',
        Footer:'Status',
        accessor:'Status',
        cell:'ssssssss'
        // cell:<IconButton aria-label="Search database" icon={<SearchIcon />} />
    },
]