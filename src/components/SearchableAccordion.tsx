import { useMemo, useState } from 'react';
import { data } from '../utils/consts';
import Accordion from './Accordion';
import styled from 'styled-components';
import { DataProps, ReturnData } from '../utils/types';

const searchAccordion = (accordion: DataProps[], query: string) => {
  const findSuitableChildren = (node: DataProps, query: string): ReturnData => {
    const matchedChildren = node.children.map((item) => findSuitableChildren(item, query));
    const isMatch = node.title.toLowerCase().includes(query.toLowerCase());
    const hasMatchedChildren = matchedChildren.some((item) => item.match || item.hasMatchedChildren);

    return {
      ...node,
      children: matchedChildren,
      match: isMatch,
      hasMatchedChildren: hasMatchedChildren,
    };
  };

  return accordion.map((item) => findSuitableChildren(item, query));
};

const SearchableAccordion = () => {
  const [inputValue, setInputValue] = useState('');

  const accordionData = useMemo(() => searchAccordion(data, inputValue), [inputValue]);

  return (
    <div style={{ textAlign: 'center', paddingTop: '20px' }}>
      <StyledInput value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Search..." />
      <Accordion key={inputValue} data={accordionData} defaultCollapse={inputValue === '' ? false : null} />
    </div>
  );
};

const StyledInput = styled.input`
  padding: 10px;
  margin: 20px auto;
  width: calc(100% - 100px);
  display: block;
  border-radius: 10px;
  font-size: 16px;
`;

export default SearchableAccordion;
