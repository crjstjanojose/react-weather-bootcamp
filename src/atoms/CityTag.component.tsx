import styled from "styled-components";

interface TagProps {
  checked: boolean;
}

const Tag = styled.div<TagProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 1.7rem;
  border-radius: 5px;
  font-weight: 500;
  color: var(--white);
  margin-bottom: 0.5rem;
  margin-left: 0.1rem;
  margin-right: 0.1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  background: ${({ checked }) =>
    `${checked ? `var(--tag-checked)` : `var(--tag)`}`};
`;

const TagText = styled.span`
  margin-left: auto;
  margin-right: auto;
`;

interface CityTagProps {
  name: string;
}

const CityTag: React.FC<CityTagProps> = ({ name }) => {
  return (
    <Tag checked={true}>
      <TagText>{name}</TagText>
    </Tag>
  );
};

export default CityTag;
