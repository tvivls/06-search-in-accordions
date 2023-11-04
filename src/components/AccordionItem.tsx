import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { AccordionItemProps } from '../utils/types';

const AccordionItem: FC<AccordionItemProps> = ({
  node,
  parentIsMatch = false,
  defaultCollapse,
  level = 1,
  isParent = true,
}) => {
  const hasChild = node.children && node.children.length > 0;
  const isHidden = !node.match && !node.hasMatchedChildren && !parentIsMatch && !hasChild;

  const [childVisible, setChildVisibility] = useState(
    defaultCollapse !== null ? defaultCollapse : node.hasMatchedChildren && !isHidden,
  );
  const [rotated, setRotated] = useState(false);

  useEffect(() => {
    if (isHidden) {
      setChildVisibility(false);
    }
  }, [isHidden]);

  return (
    <div>
      <StyledAccordionItem
        isParent={isParent}
        onClick={() => {
          setChildVisibility((prevState: any) => !prevState);
          setRotated((prevState) => !prevState);
        }}
      >
        {node.title}
        {hasChild && <Image src="/listItem.svg" alt="My Icon" rotated={rotated} />}
      </StyledAccordionItem>

      {hasChild && childVisible && (
        <AccordionContainer level={level}>
          {node.children.map((item) => (
            <AccordionItem
              key={item.id}
              node={item}
              level={level + 1}
              parentIsMatch={node.match || parentIsMatch}
              defaultCollapse={defaultCollapse}
              isParent={false}
            />
          ))}
        </AccordionContainer>
      )}
    </div>
  );
};

const Image = styled.img<{ rotated: boolean }>`
  transform: ${(props) => (props.rotated ? 'rotate(270deg)' : 'rotate(90deg)')};
`;

const AccordionContainer = styled.div<{ level: number }>`
  padding-left: ${(props) => props.level + 20}px;
`;

const StyledAccordionItem = styled.div<{ isParent: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  margin: 2px 0;
  background-color: ${(props) => (props.isParent ? '#607d8b' : '#ffffff')};
  color: ${(props) => (props.isParent ? '#ffffff' : null)};
`;

export default AccordionItem;
