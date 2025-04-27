import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChevronRight, Plus } from "lucide-react";
import { useState } from "react";

function LearningPathways({ pathways = [] }) {
  const [showAddPathwayDialog, setShowAddPathwayDialog] = useState(false);
  const [newPathway, setNewPathway] = useState({
    title: "",
    description: "",
    coursesRequired: [],
    skillsAcquired: "",
    duration: "",
    level: "beginner"
  });

  const handleCreatePathway = () => {
    // TODO: Implement pathway creation
    console.log(newPathway);
    setShowAddPathwayDialog(false);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Learning Pathways</h2>
        <Button onClick={() => setShowAddPathwayDialog(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Create New Pathway
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pathways.map((pathway, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{pathway.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{pathway.description}</p>
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <span className="font-medium">Duration:</span>
                  <span className="ml-2">{pathway.duration}</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="font-medium">Level:</span>
                  <span className="ml-2 capitalize">{pathway.level}</span>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View Details
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={showAddPathwayDialog} onOpenChange={setShowAddPathwayDialog}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Create New Learning Pathway</DialogTitle>
            <DialogDescription>
              Design a structured learning path for your students
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="title">Pathway Title</Label>
              <Input
                id="title"
                placeholder="e.g., Full Stack Development"
                value={newPathway.title}
                onChange={(e) => setNewPathway({ ...newPathway, title: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Describe what students will learn..."
                value={newPathway.description}
                onChange={(e) => setNewPathway({ ...newPathway, description: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="duration">Duration</Label>
                <Input
                  id="duration"
                  placeholder="e.g., 3 months"
                  value={newPathway.duration}
                  onChange={(e) => setNewPathway({ ...newPathway, duration: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="level">Level</Label>
                <select
                  id="level"
                  className="w-full p-2 border rounded-md"
                  value={newPathway.level}
                  onChange={(e) => setNewPathway({ ...newPathway, level: e.target.value })}
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="skills">Skills Acquired</Label>
              <Textarea
                id="skills"
                placeholder="List the skills students will gain..."
                value={newPathway.skillsAcquired}
                onChange={(e) => setNewPathway({ ...newPathway, skillsAcquired: e.target.value })}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAddPathwayDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleCreatePathway}>Create Pathway</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default LearningPathways;