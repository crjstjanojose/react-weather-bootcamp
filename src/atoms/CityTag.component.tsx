import styled from "styled-components";

const Tag = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 1.7rem;
  border-radius: 5px;
  width: 18rem;
  font-weight: 500;
  color: var(--white);
  margin-bottom: 1rem;
  margin-left: 0.1rem;
  margin-right: 0.1rem;
  background-color: var(--tag);
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
    <Tag>
      <TagText>{name}</TagText>
    </Tag>
  );
};

export default CityTag;
