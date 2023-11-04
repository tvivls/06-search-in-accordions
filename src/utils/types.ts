export interface ReturnData extends DataProps {
  match?: boolean;
  hasMatchedChildren?: boolean;
}

export interface DataProps {
  id: number;
  title: string;
  children: DataProps[];
}

export type DefaultCollapseType = boolean | null;

export interface AccordionItemProps {
  node: ReturnData;
  parentIsMatch?: boolean;
  defaultCollapse: DefaultCollapseType;
  level?: number;
  isParent?: boolean;
}
