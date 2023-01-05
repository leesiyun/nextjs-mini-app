import styled from 'styled-components'
import ContactsHeader from '../../components/contacts/ContactsHeader'
import ContactsMain from '../../components/contacts/ContactsMain'
import client from '../../lib/sanity/client'
import {useState, useEffect} from 'react'

const Contacts = ({contacts}) => {
  const [contactList, setContactList] = useState([])
  useEffect(() => setContactList(contacts), [contacts])
  return (
    <ContactsStyle>
      <ContactsHeader />
      <ContactsMain contactList={contactList} />
    </ContactsStyle>
  )
}

export default Contacts

const ContactsStyle = styled.div`
  color: #5f6367;
  font-size: 15px;
`

export const getStaticProps = async () => {
  const contacts = await client.fetch('*[_type == "contact"]')
  return {
    props: {
      contacts,
    },
  }
}