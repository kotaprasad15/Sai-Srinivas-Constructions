export interface Project {
  id: string
  title: string
  description: string
  category: string
  status: 'Ongoing' | 'Completed'
  image: string
  imageAlt: string
  location?: string
}

// Add verified project information and owner-authorized photographs here.
// An empty array intentionally displays the portfolio update notice.
export const projects: Project[] = []
