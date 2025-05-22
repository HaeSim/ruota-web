"use client"
import { IconSlash } from "@tabler/icons-react"

import { Fragment } from "react"
import { useMenuTree } from "@/app/(1.admin)/constants/_menu-config/useMenuTree"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function Breadcrumbs() {
  const { currentMenuHierarchy, currentMenuNode } = useMenuTree()
  if (!currentMenuHierarchy?.length && !currentMenuNode) return null

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {currentMenuHierarchy.map((node, index) => (
          <Fragment key={`${node.title}-${index}`}>
            <BreadcrumbItem className="hidden md:block">
              {index === currentMenuHierarchy.length - 1 && !currentMenuNode ? (
                <BreadcrumbPage>{node.title}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={node.getFullPath()}>{node.title}</BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {index < currentMenuHierarchy.length - 1 && (
              <BreadcrumbSeparator className="hidden md:block">
                <IconSlash />
              </BreadcrumbSeparator>
            )}
          </Fragment>
        ))}
        {currentMenuNode && (
          <>
            {currentMenuHierarchy.length > 0 && (
              <BreadcrumbSeparator className="hidden md:block">
                <IconSlash />
              </BreadcrumbSeparator>
            )}
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbPage>{currentMenuNode.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
