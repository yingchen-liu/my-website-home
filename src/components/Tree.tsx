import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMeta,
} from "semantic-ui-react";
import "./Tree.scss";
import { TreeItem } from "../routes/SkillTree";

function Tree({ children }: { children: any }) {
  return (
    <>
      <div className="tree">{children}</div>
    </>
  );
}

function TreeHierarchy({ children }: { children: any }) {
  return (
    <>
      <div className="tree__hierarchy">{children}</div>
    </>
  );
}

function TreeChildren({ children }: { children: any }) {
  return (
    <>
      <div className="tree__children">{children}</div>
    </>
  );
}

function TreeRoot() {
  return (
    <>
      <Card className="tree__item tree__root">
        <CardContent>
          <CardHeader>SkillTree</CardHeader>
        </CardContent>
      </Card>
    </>
  );
}

function TreeLeaf(props: {
  parent: TreeItem;
  data: TreeItem;
  isActive: boolean;
  onClick: (node: TreeItem, parent: TreeItem) => void;
  onAddChildClick: (node: TreeItem) => void;
  onAddSiblingClick: (parent: TreeItem) => void;
  onLoadMoreClick: (node: TreeItem) => void;
}) {
  return (
    <>
      <Card
        className={`tree__item tree__leaf${
          props.data.children?.length ? " tree__leaf--has-children" : ""
        }${props.isActive ? " tree__item--active" : ""}`}
        onClick={() => {
          props.onClick(props.data, props.parent);
        }}
      >
        <CardContent>
          <CardHeader>{props.data.name}</CardHeader>
          {props.data.subtitle && <CardMeta>{props.data.subtitle}</CardMeta>}
          <Button
            className="tree__item__bottom_button--show_if_selected"
            onClick={() => props.onAddSiblingClick(props.parent)}
          >
            +
          </Button>
        </CardContent>
        {props.data.isCollapsed && props.data.children.length === 0 && (
          <Button
            className="tree__item__right_button"
            onClick={() => props.onLoadMoreClick(props.data)}
          >
            &gt;
          </Button>
        )}
        {(!props.data.isCollapsed || props.data.children.length !== 0) && (
          <Button
            className="tree__item__right_button--show_if_selected"
            onClick={() => props.onAddChildClick(props.data)}
          >
            +
          </Button>
        )}
      </Card>
    </>
  );
}

export { Tree, TreeHierarchy, TreeChildren, TreeRoot, TreeLeaf };
