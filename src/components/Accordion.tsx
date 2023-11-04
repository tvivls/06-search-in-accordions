import styled from 'styled-components';
import AccordionItem from './AccordionItem';
import { DataProps, DefaultCollapseType } from '../utils/types';

const Accordion = ({ data, defaultCollapse }: { data: DataProps[]; defaultCollapse: DefaultCollapseType }) => {
  return (
    <Container>
      {data.map((node) => (
        <AccordionItem key={node.id} node={node} defaultCollapse={defaultCollapse} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  width: calc(100% - 100px);
`;

export default Accordion;
