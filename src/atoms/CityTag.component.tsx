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
  cursor: pointer;
  background: ${({ checked, theme }) =>
    `${checked ? theme.tagChecked : theme.tag}`};
`;

const TagText = styled.span`
  margin-left: auto;
  margin-right: auto;
`;

interface CityTagProps {
  name: string;
  checked: boolean;
  onClick: () => void;
}

const CityTag: React.FC<CityTagProps> = ({ name, checked, onClick }) => {
  return (
    <Tag checked={checked} onClick={onClick}>
      <TagText>{name}</TagText>
    </Tag>
  );
};

export default CityTag;
