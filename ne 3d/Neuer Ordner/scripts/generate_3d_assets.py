import math
import os

def create_torus(filename, R=2.0, r=0.5, numc=32, numt=16):
    verts = []
    faces = []
    for i in range(numc):
        for j in range(numt):
            u = i * 2 * math.pi / numc
            v = j * 2 * math.pi / numt
            x = (R + r * math.cos(v)) * math.cos(u)
            y = (R + r * math.cos(v)) * math.sin(u)
            z = r * math.sin(v)
            verts.append((x, y, z))
    
    for i in range(numc):
        for j in range(numt):
            next_i = (i + 1) % numc
            next_j = (j + 1) % numt
            
            p1 = i * numt + j + 1
            p2 = i * numt + next_j + 1
            p3 = next_i * numt + next_j + 1
            p4 = next_i * numt + j + 1
            
            faces.append((p1, p2, p3, p4))
            
    with open(filename, 'w') as f:
        f.write("# Portal Torus\n")
        f.write(f"o Portal\n")
        for v in verts:
            f.write(f"v {v[0]:.4f} {v[1]:.4f} {v[2]:.4f}\n")
        for face in faces:
            f.write(f"f {face[0]} {face[1]} {face[2]} {face[3]}\n")

def create_cone(filename, r=0.5, h=2.0, numt=16):
    verts = [(0, 0, h)] # top point
    faces = []
    
    for i in range(numt):
        u = i * 2 * math.pi / numt
        x = r * math.cos(u)
        y = r * math.sin(u)
        verts.append((x, y, 0))
        
    verts.append((0, 0, 0)) # bottom center
    center_idx = len(verts)

    for i in range(numt):
        next_i = (i + 1) % numt
        # side face
        faces.append((1, i + 2, next_i + 2))
        # bottom face
        faces.append((center_idx, next_i + 2, i + 2))

    with open(filename, 'w') as f:
        f.write("# Cone Trail snippet\n")
        f.write(f"o Trail_Segment\n")
        for v in verts:
            f.write(f"v {v[0]:.4f} {v[1]:.4f} {v[2]:.4f}\n")
        for face in faces:
            f.write(f"f {face[0]} {face[1]} {face[2]}\n")

def create_cube(filename, size=1.0):
    s = size / 2.0
    verts = [
        (-s, -s, -s), ( s, -s, -s), ( s,  s, -s), (-s,  s, -s),
        (-s, -s,  s), ( s, -s,  s), ( s,  s,  s), (-s,  s,  s)
    ]
    faces = [
        (1,2,3,4), (5,8,7,6), (1,5,6,2),
        (2,6,7,3), (3,7,8,4), (5,1,4,8)
    ]
    with open(filename, 'w') as f:
        f.write("# Simple Box\n")
        f.write(f"o Box_Item\n")
        for v in verts:
            f.write(f"v {v[0]:.4f} {v[1]:.4f} {v[2]:.4f}\n")
        for face in faces:
            f.write(f"f {face[0]} {face[1]} {face[2]} {face[3]}\n")

if __name__ == '__main__':
    os.makedirs('assets/portals', exist_ok=True)
    os.makedirs('assets/trails', exist_ok=True)
    os.makedirs('assets/items', exist_ok=True)
    
    create_torus('assets/portals/portal_ring.obj', R=3.0, r=0.4, numc=32, numt=16)
    create_cone('assets/trails/trail_segment.obj', r=0.5, h=2.5, numt=8)
    create_cube('assets/items/item_box.obj', size=1.5)
    print("Assets generated successfully!")
